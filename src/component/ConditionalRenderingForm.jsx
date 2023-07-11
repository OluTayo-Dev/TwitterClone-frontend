import React, { useState } from "react";
import { useEffect } from "react";
import  {BiArrowBack} from "react-icons/bi";


function ConditionalRenderingForm() {
 const [loginPage, setLoginPage] = useState({
    page1: true,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
  });
  const [enableBtn, setEnableBtn] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
  });

  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (
      inputs.name !== "" &&
      inputs.email !== "" &&
      inputs.month !== "" &&
      inputs.day !== "" &&
      inputs.year !== ""
    ) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [inputs]);

  return (
    <>
      {loginPage.page1 && (
        <div className="flex justify-center items-center h-screen ">
          <form className="w-2/5">
            <h2>Step 1 of 5</h2>
            <h1>Create your account</h1>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                required
                onChange={handleOnChange}
                id="name"
                value={inputs.name}
                className="border border-black"
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                value={inputs.email}
                onChange={handleOnChange}
                className="border border-black"
              />
              <p>Date of birth</p>
              <p className="text-xs">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <div className="flex items-center">
                <select onChange={handleOnChange} id="month">
                  <option>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                </select>
                <select onChange={handleOnChange} id="day">
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select onChange={handleOnChange} id="year">
                  <option>Year</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="rounded-md bg-slate-200 px-8 py-2"
                disabled={!enableBtn}
                onClick={() =>
                  setLoginPage({ ...loginPage, page1: false, page2: true })
                }
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {loginPage.page2 && (
        <div className="flex justify-center items-center h-screen ">
          <form className="w-2/5">
            <div className="flex items-center gap-4">
              <BiArrowBack
                className="cursor-pointer"
                onClick={() =>
                  setLoginPage({ ...loginPage, page1: true, page2: false })
                }
              />
              <h2>Step 2 of 5</h2>
            </div>
            <h1>Create your account</h1>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                required
                onChange={handleOnChange}
                id="name"
                className="border border-black"
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleOnChange}
                className="border border-black"
              />
              <p>Date of birth</p>
              <p className="text-xs">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <div className="flex items-center">
                <select onChange={handleOnChange} id="month">
                  <option>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                </select>
                <select onChange={handleOnChange} id="day">
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select onChange={handleOnChange} id="year">
                  <option>Year</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="rounded-md bg-slate-200 px-8 py-2"
                disabled={!enableBtn}
                onClick={() =>
                  setLoginPage({ ...loginPage, page2: false, page3: true })
                }
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {loginPage.page3 && (
        <>
          <BiArrowBack
            className="cursor-pointer"
            onClick={() =>
              setLoginPage({ ...loginPage, page2: true, page3: false })
            }
          />
          <h2>Step 3 of 5</h2>
          <form>
            <button>submit</button>
          </form>
        </>
      )}
    </>
  );
};
   
export default ConditionalRenderingForm;