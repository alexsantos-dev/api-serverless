import { Skeleton } from '@/components/ui/skeleton'

export default function TodoListItemLoading() {
  return (
    <div className='flex-col w-[360px] h-[56px] '>
      <div className='w-full flex rounded-md '>
        <div className='w-[270px] flex items-center'>
          <Skeleton className='w-[240px] h-[32px] bg-slate-400' />
        </div>
        <div className='w-[90px] flex items-center justify-center '>
          <div className='flex gap-4 '>
            <Skeleton className='w-[32px] h-[32px] bg-slate-400' />
            <Skeleton className='w-[32px] h-[32px] bg-slate-400' />
          </div>
        </div>
      </div>
      <div className='mt-2'></div>
    </div>
  )
}
