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

export default function AddButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-[370px] h-[48px]'>Adicionar</Button>
      </DialogTrigger>
      <DialogContent className='w-[400px] h-[260px]'>
        <DialogHeader>
          <DialogTitle>Adicionar</DialogTitle>
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
