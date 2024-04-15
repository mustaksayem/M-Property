
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Header/Navbar';

const Error = () => {
    return (
      <div>
        <Helmet>
          <title>NS | Error</title>
        </Helmet>
        <div>
          <Navbar></Navbar>

          <section className='flex items-center h-full p-16 bg-gray-50 text-gray-800'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
              <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-9xl text-gray-400'>
                  <span className='sr-only'>Error</span>404
                </h2>
                <p className='text-2xl font-semibold md:text-3xl'>
                  Sorry, we could not find this page.
                </p>
                <p className='mt-4 mb-8 text-gray-600'>
                  But do not worry, you can find other things on our homepage
                </p>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-8 py-3 font-semibold rounded bg-default-600 text-gray-50'>
                  Back to homepage
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Error;