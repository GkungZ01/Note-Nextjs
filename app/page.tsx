/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import TextareaAutoResize from "@/components/TextareaAutoResize";
import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/fontawesome_v6.7.2/css/all.css";
import "@/styles/fontawesome_v6.7.2/css/sharp-solid.css";
import "@/styles/fontawesome_v6.7.2/css/sharp-regular.css";
import { createRoot } from "react-dom/client";

export default function Home() {
  const [ddColorIsOpen, setddColorIsOpen] = useState(false);
  const [IsColor, setIsColor] = useState("");
  const refNoteName = useRef<HTMLTextAreaElement>(null);
  const refNote = useRef<HTMLTextAreaElement>(null);
  const refNoteBox = useRef<HTMLDivElement>(null);
  const refColorBox = useRef<HTMLDivElement>(null);
  const refFormNote = useRef<HTMLFormElement>(null);
  const refNoteList = useRef<HTMLDivElement>(null);

  const colorList = [
    "bg-red-200 dark:bg-red-900 border-red-200 dark:border-red-900 duration-300",
    "bg-orange-200 dark:bg-orange-900 border-orange-200 dark:border-orange-900 duration-300",
    "bg-yellow-200 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-900 duration-300",
    "bg-green-200 dark:bg-green-900 border-green-200 dark:border-green-900 duration-300",
  ];

  const createNote = (noteName: string, note: string, color: string = "bg-transparent") => {
    return (
      <div
        className={`mx-auto max-w-[600px] rounded-md border border-solid border-[#e0e0e0] ${color}`}
        // style={{ backgroundColor: color }}
      >
        <div className="px-4 py-2">
          <div className="w-full text-base font-normal leading-[1.5rem] bg-transparent whitespace-pre-wrap break-words text-balance dark:text-stone-200">
            {noteName}
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="w-full text-sm font-light leading-[1.5rem] bg-transparent whitespace-pre-wrap break-words text-balance dark:text-stone-200">
            {note}
          </div>
        </div>
      </div>
    );
  };

  TextareaAutoResize();

  // Dropdown
  const closeColor = (event: MouseEvent) => {
    if ((refColorBox.current && !refColorBox.current.contains(event.target as Node)) || !refColorBox.current) {
      setddColorIsOpen(false);
      document.removeEventListener("click", closeColor);
    }
  };

  useEffect(() => {
    if (ddColorIsOpen) {
      document.addEventListener("click", closeColor);
    }
  }, [ddColorIsOpen]);

  // End Dropdown

  useEffect(() => {
    refNoteName.current?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        refNote.current?.focus();
      }
    });

    refFormNote.current?.addEventListener("submit", (event) => {
      event.preventDefault();

      const noteName = refNoteName.current?.value;
      const note = refNote.current?.value;
      const color = refFormNote.current?.color.value || "bg-transparent";

      if (noteName && note && color) {
        const noteElement = createNote(noteName, note, color);
        const tempDiv = document.createElement("div");
        const root = createRoot(tempDiv);
        root.render(noteElement);

        refNoteList.current?.insertBefore(tempDiv, refNoteList.current?.firstChild);

        if (refNoteName.current) refNoteName.current.value = "";
        if (refNote.current) refNote.current.value = "";
        setIsColor("bg-transparent");
      }
    });
  }, []);

  return (
    <>
      <div className="p-2 flex h-full w-full justify-center">
        <div className="container flex flex-col h-full">
          <div
            className={`mt-4 max-w-[600px] w-full mx-auto shadow-md rounded-md border border-solid border-[#e0e0e0] duration-300 ${IsColor}`}
            // style={{ backgroundColor:  IsColor}}
            ref={refNoteBox}
          >
            <form className="relative" ref={refFormNote}>
              <input type="hidden" name="color" value={IsColor} />
              <div className="px-4 py-2">
                <textarea
                  className="w-full outline-none auto-resize text-base font-normal leading-[1.5rem] bg-transparent dark:text-stone-200 dark:placeholder:text-stone-300"
                  name="name"
                  id=""
                  rows={1}
                  placeholder="ชื่อ"
                  ref={refNoteName}
                ></textarea>
              </div>
              <div className="px-4 py-3">
                <textarea
                  className="w-full outline-none auto-resize text-sm font-light leading-[1.5rem] bg-transparent dark:text-stone-200 dark:placeholder:text-stone-300"
                  name="note"
                  id=""
                  rows={1}
                  ref={refNote}
                  placeholder="จดโน็ต..."
                ></textarea>
              </div>

              <div className="flex flex-wrap-reverse justify-between px-4 py-1 w-full">
                <div className="">
                  <div className="relative inline-block">
                    <button
                      className="rounded-full w-9 h-9 duration-300 hover:bg-[#cbd5e1] btn-dropdown dark:text-stone-200 dark:hover:bg-stone-600"
                      type="button"
                      onClick={() => {
                        setddColorIsOpen(!ddColorIsOpen);
                      }}
                    >
                      <i className="icon text-sm fa-regular fa-palette"></i>
                    </button>
                    {/* Dropdown Color */}
                    {ddColorIsOpen && (
                      <div
                        className="absolute z-10 mt- w-fit h-[50px] origin-top-right rounded-md bg-white shadow-lg border-[#e0e0e0] border dark:bg-stone-800 dark:border-stone-600"
                        ref={refColorBox}
                      >
                        <div className="flex items-center w-full h-full px-2 gap-1">
                          <button
                            className="btn-color w-8 h-8 rounded-full border-2 border-solid border-[#e0e0e0] hover:border-[#393939] duration-200 dark:border-stone-500 dark:hover:border-stone-200 dark:text-stone-200"
                            onClick={() => setIsColor(`bg-transparent`)}
                            data-color="bg-transparent"
                            type="button"
                          >
                            <i className="fa-regular fa-droplet-slash"></i>
                          </button>
                          {colorList.map((color) => (
                            <button
                              key={color}
                              data-color={color}
                              type="button"
                              className={`btn-color w-8 h-8 rounded-full border-2 border-solid ${color} hover:border-[#393939] duration-200 dark:border-stone-500 dark:hover:border-stone-200`}
                              // style={{ backgroundColor: color }}
                              onClick={() => setIsColor(color)}
                            ></button>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* End Dropdown Color */}
                  </div>
                </div>
                <div className="py-2 px-6 h-9">
                  <button type="submit" className="dark:text-stone-200 select-none">
                    บันทึก
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div ref={refNoteList} className="flex flex-col w-full mt-6 gap-3"></div>
        </div>
      </div>
    </>
  );
}
