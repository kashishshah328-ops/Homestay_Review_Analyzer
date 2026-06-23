/**
 * Modal Component
 *
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

export default function Modal({

isOpen,

onClose,

title,

children

}) {

if(!isOpen)

return null

return (

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

<div className="bg-white p-6 rounded-lg w-96">

<div className="flex justify-between">

<h2>

{title}

</h2>

<button onClick={onClose}>

✕

</button>

</div>

{children}

</div>

</div>

)

}