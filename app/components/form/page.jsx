import React from 'react'

import SidebarLayout from '../../layouts/Admin.js'

export default function Form() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3">
            <SidebarLayout />
            <div className="col-span-3">
                <div className="md:ml-64 sm:ml-0" style={{ backgroundColor: '#1D293B', height: '40vh' }}></div>
                <div className="md:ml-64 sm:ml-0" style={{ backgroundColor: 'white', minHeight: '60vh', paddingTop: '20vh' }}>
                    {/* FORM INPUT */}
                    <div className="" style={{ marginLeft: 20, marginRight: 20, marginTop: -450 }}>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-dark border-0">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-dark text-xl font-bold">Input Detail</h6>

                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white" style={{ backgroundColor: '#F1F5F9' }}>
                                <form>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Detail Gempa
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Magnitudo
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Masukkan Magnitudo"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Kedalaman
                                                </label>
                                                <input
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Masukkan Kedalaman"
                                                />
                                            </div>
                                        </div>


                                        <div className="w-full lg:w-6/12 px-4">

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password">
                                                    Tipe Gempa
                                                </label>


                                            </div>
                                            <div class="border-0 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow w-full">
                                                <nav class="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                                                    <div role="button"
                                                        class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                        <label htmlFor="horizontal-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
                                                            <div class="grid mr-3 place-items-center">
                                                                <div class="inline-flex items-center">
                                                                    <label class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                                        htmlFor="horizontal-list-react">
                                                                        <input name="horizontal-list" id="horizontal-list-react" type="radio"
                                                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                                                                        <span
                                                                            class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                                            </svg>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-gray-700">
                                                                Terasa
                                                            </p>
                                                        </label>
                                                    </div>
                                                    <div role="button"
                                                        class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                        <label htmlFor="horizontal-list-vue" class="flex items-center w-full px-3 py-2 cursor-pointer">
                                                            <div class="grid mr-3 place-items-center">
                                                                <div class="inline-flex items-center">
                                                                    <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="horizontal-list-vue">
                                                                        <input name="horizontal-list" id="horizontal-list-vue" type="radio"
                                                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                                                                        <span
                                                                            class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                                            </svg>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-gray-700">
                                                                Tidak Terasa
                                                            </p>
                                                        </label>
                                                    </div>

                                                </nav>


                                            </div>

                                            <div style={{ marginTop: 20 }}>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password">
                                                        Upload Foto
                                                    </label>
                                                </div>
                                                <label style={{ backgroundColor: '#F1F5F9' }} for="dropzone-file" class="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>

                                    <hr className="mt-6 border-b-1 border-gray-300" />

                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Detail Lokasi
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Alamat
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Masukkan Alamat"
                                                    rows='4'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <button className="text-gray-700 bg-transparent border border-solid border-gray-700 hover:bg-gray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default form

// Form.layout = SidebarLayout;