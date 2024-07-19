import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'react-hot-toast'

export default function TodoButtonToaster() {
  return (
    <>
      <Toaster position='bottom-right' reverseOrder={false} />
      <Button
        type='submit'
        onClick={() => toast.success('Successfully toasted!')}>
        teste
      </Button>
    </>
  )
}
