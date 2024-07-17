import { Toaster, toast } from 'sonner'

import { Button } from '@/components/ui/button'

export default function TodoSaveToaster() {
  return (
    <Button
      type='submit'
      onClick={() =>
        toast.success('Saved sucessfully', { className: 'w-auto' })
      }>
      Salvar
    </Button>
  )
}
