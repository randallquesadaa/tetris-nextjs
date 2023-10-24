export default function Register() {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <form action="" className="flex flex-col rounded bg-white shadow-md p-10">
        <section className="flex mb-4 flex-col">
          <label htmlFor="" className="w-full mr-3">First name</label>
          <input type="text" className="border border-slate-400 rounded p-0.5"/>
        </section>
        <section className="flex flex-col mb-4">
          <label htmlFor="" className="mr-3">Last name</label>
          <input type="text" className="border border-slate-400 rounded p-0.5"/>
        </section>
        <section className="flex flex-col mb-4">
          <label htmlFor="" className="mr-3">Email</label>
          <input type="email" name="" id="" className="border border-slate-400 rounded p-0.5"/>
        </section>
        <section className="flex flex-col mb-7">
          <label htmlFor="" className="mr-3">Password</label>
          <input type="password" name="" id="" className="border border-slate-400 rounded p-0.5"/>
        </section>
        <section className="flex justify-around">
          <button className="rounded bg-green-400 text-green-900 w-2/5" type="submit">Save</button>
          <button className="rounded bg-red-400 text-green-900 w-2/5" type="button">Clean</button>
        </section>
      </form>
    </section>
  )
}
