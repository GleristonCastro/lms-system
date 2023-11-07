import SideBarNav from '../_components/SideBarNav'
import Header from '../_components/Header'

function homeLayout({children}) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
        <SideBarNav />
      </div>
      <Header />
      {children}
    </div>
  )
}

export default homeLayout