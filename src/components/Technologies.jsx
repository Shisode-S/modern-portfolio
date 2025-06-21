import {React} from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill } from 'react-icons/ri';
import { SiTypescript , SiJquery , SiTailwindcss  } from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';

const iconvariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
        className='my-20  text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconvariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Fill className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div
            variants={iconvariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiCss3Fill className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTypescript className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-7xl text-white'/>
            </motion.div>
             <motion.div
             variants={iconvariants(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-sky-400'/>
            </motion.div>
                <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJquery className='text-7xl text-blue-400' />
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies