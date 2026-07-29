import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, ProductVariant } from '@/data/products'

export interface CartItem {
  cartItemId: string
  product: Product
  selectedColor: ProductVariant
  selectedOption?: ProductVariant
  quantity: number
  unitPrice: number
}

interface ToastMessage {
  id: string
  title: string
  message: string
  type?: 'success' | 'info' | 'error'
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  discountCode: string
  discountPercentage: number
  toasts: ToastMessage[]
  
  // Cart Actions
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product, selectedColor: ProductVariant, selectedOption?: ProductVariant, quantity?: number) => void
  removeItem: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, quantity: number) => void
  clearCart: () => void
  applyDiscountCode: (code: string) => boolean
  
  // Toast Actions
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void
  removeToast: (id: string) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      discountCode: '',
      discountPercentage: 0,
      toasts: [],

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, selectedColor, selectedOption, quantity = 1) => {
        const optionPrice = selectedOption?.priceModifier || 0
        const unitPrice = product.price + optionPrice
        const cartItemId = `${product.id}-${selectedColor.id}-${selectedOption?.id || 'none'}`

        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.cartItemId === cartItemId)
          let updatedItems = [...state.items]

          if (existingIndex > -1) {
            const currentQty = updatedItems[existingIndex].quantity
            const newQty = Math.min(currentQty + quantity, product.stock)
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: newQty,
            }
          } else {
            updatedItems.push({
              cartItemId,
              product,
              selectedColor,
              selectedOption,
              quantity: Math.min(quantity, product.stock),
              unitPrice,
            })
          }

          return {
            items: updatedItems,
            isOpen: true, // Automatically open cart drawer on add
          }
        })

        // Add toast
        get().addToast(
          'Ditambahkan ke Keranjang',
          `${product.name} (${selectedColor.name}) x${quantity} berhasil ditambahkan.`
        )
      },

      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        }))
      },

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: Math.min(quantity, item.product.stock) }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [], discountCode: '', discountPercentage: 0 }),

      applyDiscountCode: (code) => {
        const normalized = code.trim().toUpperCase()
        if (normalized === 'KINETIX10' || normalized === 'DISCOUNT10') {
          set({ discountCode: normalized, discountPercentage: 10 })
          get().addToast('Kupon Berhasil', 'Diskon 10% berhasil diterapkan pada keranjang Anda!')
          return true
        } else if (normalized === 'KINETIX15' || normalized === 'PROMO15') {
          set({ discountCode: normalized, discountPercentage: 15 })
          get().addToast('Kupon Spesial', 'Diskon 15% berhasil diterapkan pada keranjang Anda!')
          return true
        } else {
          get().addToast('Kupon Tidak Valid', 'Kode kupon tidak ditemukan atau telah kadaluarsa.', 'error')
          return false
        }
      },

      addToast: (title, message, type = 'success') => {
        const id = Math.random().toString(36).substring(2, 9)
        set((state) => ({
          toasts: [...state.toasts, { id, title, message, type }],
        }))

        // Auto remove toast after 4 seconds
        setTimeout(() => {
          get().removeToast(id)
        }, 4000)
      },

      removeToast: (id) => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }))
      },
    }),
    {
      name: 'kinetix-cart-storage',
      partialize: (state) => ({
        items: state.items,
        discountCode: state.discountCode,
        discountPercentage: state.discountPercentage,
      }),
    }
  )
)
