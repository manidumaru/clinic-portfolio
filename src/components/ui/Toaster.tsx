"use client";

import { Slide, ToastContainer } from "react-toastify";

/** App-wide toast host; brand colours are set via --toastify-* variables in globals.css. */
export function Toaster() {
  return (
    <ToastContainer
      position="bottom-right"
      transition={Slide}
      theme="light"
      newestOnTop
      pauseOnFocusLoss={false}
      closeOnClick={false}
    />
  );
}
