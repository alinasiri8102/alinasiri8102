import {IconCopyright} from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className='flex-h'>
        <IconCopyright/>
        <p>CopyRight {(new Date().getFullYear())}</p>
    </footer>
  )
}

export default Footer