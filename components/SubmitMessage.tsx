import { motion } from "framer-motion";
import { HiXCircle, HiCheckCircle } from "react-icons/hi";
import { FormValidationPayload } from "../types";
const SubmitMessage = ({ status }: { status: FormValidationPayload }) => {
  const { validPayload, validateMessage } = status;
  let colors = validPayload
    ? "text-green-900 bg-green-100 border-green-900"
    : "text-red-800 bg-red-100 border-red-800";
  return (
    <motion.span
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className={`fixed z-40 border-l-8 top-16 md:top24 right-8 w-72 h-20 flex gap-2 items-center p-4 mt-8 ${colors} rounded-lg`}
    >
      {validPayload ? (
        <HiCheckCircle className="text-4xl" />
      ) : (
        <HiXCircle className="text-4xl" />
      )}
      {validateMessage}
    </motion.span>
  );
};

export default SubmitMessage;
