"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const refbtnaddNote = useRef<HTMLButtonElement>(null);
  const refnoteTitle = useRef<HTMLInputElement>(null);
  const refnoteContent = useRef<HTMLTextAreaElement>(null);
  const refnotesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn_addNote = refbtnaddNote.current;
    const noteTitle = refnoteTitle.current;
    const noteContent = refnoteContent.current;
    const notesContainer = refnotesContainer.current;

    if (!noteTitle || !noteContent || !notesContainer || !btn_addNote) return;

    btn_addNote.addEventListener("click", () => {
      const title = noteTitle.value;
      const content = noteContent.value;

      if (!title || !content) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
      }

      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="this.parentElement.remove()">ลบ</button>
        `;

      notesContainer.prepend(noteElement);

      // ล้างข้อมูลในฟอร์ม
      noteTitle.value = "";
      noteContent.value = "";
    });


  }, []);

  return (
    <>
    <div className="container w-full h-screen"></div>
    <div className="container w-full h-screen"></div>
    <div className="container w-full h-screen"></div>
      {/* <div className="container">
        <h1>บันทึกของฉัน</h1>

        <div className="note-input">
          <input type="text" ref={refnoteTitle} id="noteTitle" placeholder="หัวข้อ" />
          <textarea ref={refnoteContent} id="noteContent" placeholder="เนื้อหา"></textarea>
          <button id="addNote" ref={refbtnaddNote}>
            บันทึก
          </button>
        </div>

        <div className="notes-container" ref={refnotesContainer} id="notesContainer">
          
        </div>
      </div> */}
    </>
  );
}
