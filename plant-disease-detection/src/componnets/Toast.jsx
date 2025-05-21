import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
  return (
       <ToastContainer
      position="top-center"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  )
}
 export const validKeywords = ['leaf', 'plant', 'leaves',"early","lb"];
export default Toast