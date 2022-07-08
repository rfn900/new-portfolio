import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { FaAngleRight } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useActivateSection } from '../customHooks/useActivateSection'
import AppButton from './AppButton'
import { MotionSectionTitle } from './MotionSectionTitle'
import { formValidateMessage } from '../utils/formValidates'
import SubmitMessage from '../components/SubmitMessage'
import LoadingSpin from '../components/LoadingSpin'
import { easing } from '../animation/settings'

const ContactMe = ({ id }) => {
  const { ref, inView } = useActivateSection(id)
  const formRef = useRef()
  const [formFields, setFormFields] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [btnStatus, setBtnStatus] = useState('Send')
  let errorMsgTimeOut = null
  useEffect(() => {
    errorMsgTimeOut = setTimeout(() => {
      setSubmitStatus(null)
      setBtnStatus('Send')
    }, 2600)
  }, [submitStatus])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validateMessage = formValidateMessage(formFields)
    clearTimeout(errorMsgTimeOut)
    if (validateMessage === 'validated') {
      setBtnStatus('Sending...')
      try {
        const res = await axios.post('/api/hello', formFields)
        formRef.current.reset()
        setBtnStatus('Sent')
        setSubmitStatus({
          validPayload: true,
          validateMessage: res.data.message,
        })
      } catch (e) {
        setBtnStatus('Failed')
        setSubmitStatus({
          validPayload: false,
          validateMessage: e.response.data.message,
        })
      }
    } else
      setSubmitStatus({
        validPayload: false,
        validateMessage,
      })
  }

  const handleChange = (value, type) => {
    const payload = { ...formFields }
    payload[type] = value
    setFormFields(payload)
  }

  return (
    <div
      ref={ref}
      id={id}
      className="relative mt-36 xs:mt-12 flex-center flex-col section"
    >
      <MotionSectionTitle inView={inView}>
        mail -s "hey" rods
      </MotionSectionTitle>
      <motion.form
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: easing }}
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative w-full lg:w-[720px] flex flex-col space-y-8 lg:p-8 mt-12 "
      >
        <div className="relative flex flex-col md:flex-row gap-6 w-full font-mono">
          <div className="relative flex-1">
            <input
              onChange={(e) => handleChange(e.target.value, e.target.id)}
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
          <div className="relative flex-1">
            <input
              onChange={(e) => handleChange(e.target.value, e.target.id)}
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
        </div>
        <div className="relative w-full flex font-mono flex-col space-y-8">
          <div className="relative flex-1">
            <input
              onChange={(e) => handleChange(e.target.value, e.target.id)}
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
          <div className="relative font-mono">
            <textarea
              onChange={(e) => handleChange(e.target.value, e.target.id)}
              id="message"
              name="message"
              placeholder="Your message here*"
              className="relative w-full pl-8 h-48 bg-[#f0f0f0] dark:bg-themeGray-darker focus:ring-themeGray-dark dark:focus:ring-yellow-300 rounded-md border-0 p-4"
            ></textarea>
            <FaAngleRight className="absolute top-5 transform text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
        </div>
        <div className="font-body ml-auto w-40">
          <AppButton
            text={btnStatus}
            Icon={btnStatus === 'Sending...' ? LoadingSpin : RiSendPlaneFill}
            customClasses="transition"
          />
        </div>
      </motion.form>
      <AnimatePresence>
        {submitStatus && (
          <motion.div>
            <SubmitMessage status={submitStatus} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactMe
