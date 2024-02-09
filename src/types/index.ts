export interface ITodo {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | null
  isComplete: boolean
}

export type FormFields = Omit<ITodo, 'id' | 'isComplete'>