import { cards } from "./data";

function App() {
	return (
		<>
			<section className=''>
				<div className='py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6'>
					{/* CABEZERA */}
					<div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-[#F2633B]'>
							CODETELIBLE
						</h2>
						<p className='mb-5  sm:text-lg '>
							Expertos en diseño, desarrollo de software y
							actualmente en las venta de <br />
							<span className='text-[#F2633B]'>
								VPS + dominio incluido
							</span>
						</p>
						{/* <p className='mb-5  sm:text-xl '>
							Codetelible tiene todo lo que necesita para poner en
							marcha su nuevo sitio web en poco tiempo.
						</p> */}
					</div>
					{/* CUERPO */}
					<div className='grilla'>
						{cards.map((card) => (
							<div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow-md xl:p-8'>
								<h3 className='mb-4 text-2xl font-bold text-[#F2633B]'>
									{card.titulo}
								</h3>
								<p className='sm:text-lg opacity-70'>
									{card.descripcion}
								</p>
								<div className='flex justify-center items-baseline my-8 text-[#F2633B]'>
									<span className='mr-2 text-5xl font-extrabold'>
										{card.precio}
									</span>
									<span className='opacity-80'>
										{card.periodo}
									</span>
								</div>

								<ul
									role='list'
									className='mb-8 space-y-4 text-left'
								>
									{card.caracteristicas.map(
										(caracteristica) => (
											<li className='flex items-center space-x-3'>
												<svg
													className='flex-shrink-0 w-5 h-5 text-[#F2633B]'
													fill='currentColor'
													viewBox='0 0 20 20'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fill-rule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clip-rule='evenodd'
													></path>
												</svg>
												<span>{caracteristica}</span>
											</li>
										)
									)}
								</ul>
								<a
									href='#'
									className='text-[#F2633B] bg-gray-100 hover:bg-[#F2633B] hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg px-5 py-2.5 text-center'
								>
									Obtener!
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
