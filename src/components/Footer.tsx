import Container from './Container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <div className="flex-grow"></div>
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-right mb-10 lg:mb-0 lg:pl-4 lg:w-1/2">
            a blog by SUD
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer