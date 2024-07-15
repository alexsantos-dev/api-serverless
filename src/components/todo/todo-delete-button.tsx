import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'

export default function DeleteButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' className='w-[20px] h-[24px]'>
          🗑️
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='flex flex-col justify-center items-center w-[400px] h-[140px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja apagar esse item?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex gap-3'>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: 'destructive' })}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
