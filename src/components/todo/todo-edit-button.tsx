import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'

export default function EditButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className='w-[20px] h-[24px]'>
          ✏️
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[400px] h-[260px]'>
        <DialogHeader>
          <DialogTitle>Editar</DialogTitle>
        </DialogHeader>
        <div className='flex gap-3 flex-col rounded-xl mb-4 '>
          <Textarea className='w-full h-full' />
        </div>
        <DialogFooter>
          <Button type='submit'>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
