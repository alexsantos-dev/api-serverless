'use client'

import { AlertDialogAction } from '@radix-ui/react-alert-dialog'
import { buttonVariants } from '../ui/button'

interface TodoDeleteButtonProps {
  DeleteAction: () => void
}

export default function TodoDeleteButton({
  DeleteAction,
}: TodoDeleteButtonProps) {
  return (
    <AlertDialogAction
      onClick={DeleteAction}
      className={buttonVariants({ variant: 'destructive' })}>
      Confirmar
    </AlertDialogAction>
  )
}
