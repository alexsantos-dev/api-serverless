import { Skeleton } from '@/components/ui/skeleton'

export default function TodoListItemLoading() {
  return (
    <div className='flex flex-col w-[300px] md:w-[360px] h-[56px] '>
      <div className='w-full flex rounded-md justify-between gap-4'>
        <div className='w-[200px] md:w-[260px] flex items-center'>
          <Skeleton className='rounded-lg w-[240px] h-[32px] bg-slate-400' />
        </div>
        <div className='w-[80px] flex items-center justify-center'>
          <div className='w-full flex justify-between'>
            <Skeleton className='rounded-lg w-[32px] h-[32px] bg-slate-400' />
            <Skeleton className='rounded-lg w-[32px] h-[32px] bg-slate-400' />
          </div>
        </div>
      </div>
      <div className='mt-2'></div>
    </div>
  )
}
