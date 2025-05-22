"use client"; // บอกว่า component นี้ทำงานที่ client-side (ไม่ใช่ server-side)

import React, { useState } from "react"; // เรียกใช้ React และ useState hook
import { FolderOpen, ChevronRight, ChevronDown } from "lucide-react"; // เรียกใช้ icon จาก lucide-react

// กำหนดโครงสร้างของไฟล์หรือโฟลเดอร์ในต้นไม้ไฟล์
interface FileTreeItem {
  type: string; // ประเภทของไอเท็ม (file หรือ folder)
  name: string; // ชื่อของไฟล์หรือโฟลเดอร์
  parent?: string; // ชื่อของโฟลเดอร์แม่ (ถ้ามี)
  level?: number; // ระดับความลึกในโครงสร้างต้นไม้
}

// กำหนด props ที่สามารถส่งเข้า VSCodeMockup component
interface VSCodeMockupProps {
  initialFileContents?: Record<string, string>; // เนื้อหาเริ่มต้นของแต่ละไฟล์ (key คือชื่อไฟล์, value คือเนื้อหา)
  fileTree?: FileTreeItem[]; // โครงสร้างต้นไม้ไฟล์ที่จะแสดง
  initialFile?: string; // ไฟล์เริ่มต้นที่จะแสดงเมื่อเปิด component
  height?: string; // ความสูงของ VSCode mockup
  editorTitle?: string; // หัวข้อของ editor
  onFileSelect?: (filename: string) => void; // function callback เมื่อมีการเลือกไฟล์
  className?: string; // CSS class เพิ่มเติม
}

// สร้าง VSCodeMockup component
const VSCodeMockup: React.FC<VSCodeMockupProps> = ({
  initialFileContents = {}, // ค่าเริ่มต้นเป็น object ว่าง
  fileTree: initialFileTree, // รับค่า fileTree จาก props
  initialFile = Object.keys(initialFileContents)[0] || "", // ไฟล์เริ่มต้นคือไฟล์แรกใน initialFileContents หรือสตริงว่าง
  height = "100%", // ความสูงเริ่มต้น
  editorTitle = "VS Code", // หัวข้อเริ่มต้น
  onFileSelect, // callback เมื่อเลือกไฟล์
  className = "", // CSS class เพิ่มเติม
}) => {
  const [currentFile, setCurrentFile] = useState<string>(initialFile); // เก็บชื่อไฟล์ปัจจุบันที่เลือก
  const [expandedFolders, setExpandedFolders] = useState<
    Record<string, boolean>
  >({
    src: true, // โฟลเดอร์ src เปิดอยู่เริ่มต้น
    components: true, // โฟลเดอร์ components เปิดอยู่เริ่มต้น
    pages: true, // โฟลเดอร์ pages เปิดอยู่เริ่มต้น
  });
  const [fileContents] = useState<Record<string, string>>(initialFileContents); // เก็บเนื้อหาของแต่ละไฟล์

  // โครงสร้างไฟล์เริ่มต้นที่จะใช้ถ้าไม่มีการกำหนด fileTree
  const defaultFileTree: FileTreeItem[] = [
    { type: "folder", name: "src", level: 0 },
    { type: "file", name: "index.js", parent: "src", level: 1 },
    { type: "file", name: "styles.css", parent: "src", level: 1 },
    { type: "folder", name: "components", parent: "src", level: 1 },
    { type: "file", name: "Button.jsx", parent: "components", level: 2 },
    { type: "file", name: "Card.jsx", parent: "components", level: 2 },
    { type: "file", name: "README.md", level: 0 },
    { type: "file", name: "package.json", level: 0 },
  ];

  // ใช้ค่า fileTree จาก props หรือใช้ค่าเริ่มต้นถ้าไม่มี
  const fileTree = initialFileTree || defaultFileTree;

  // ฟังก์ชันสำหรับเปิด/ปิดโฟลเดอร์
  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => ({
      ...prev, // เก็บค่าเดิมไว้
      [folder]: !prev[folder], // สลับสถานะโฟลเดอร์ที่คลิก
    }));
  };

  // ฟังก์ชันเมื่อมีการคลิกเลือกไฟล์
  const handleFileClick = (filename: string) => {
    setCurrentFile(filename); // เปลี่ยนไฟล์ปัจจุบัน
    if (onFileSelect) {
      onFileSelect(filename); // เรียก callback ถ้ามีการกำหนดไว้
    }
  };

  // ฟังก์ชันสำหรับแสดง icon ตามประเภทของไฟล์
  const getFileIcon = (filename: string) => {
    const extension = filename.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "js":
      case "jsx":
        return "🟨"; // JavaScript
      case "ts":
      case "tsx":
        return "🔷"; // TypeScript
      case "css":
        return "🎨"; // CSS
      case "html":
        return "📄"; // HTML
      case "json":
        return "📦"; // JSON
      case "md":
        return "📝"; // Markdown
      default:
        return "📄"; // ไฟล์อื่นๆ
    }
  };

  // ฟังก์ชันสำหรับแสดงเนื้อหาไฟล์พร้อม syntax highlighting
  const getSyntaxHighlightedContent = (content: string, filename: string) => {
    try {
      // ดึงนามสกุลไฟล์เพื่อกำหนดวิธีการแสดงผล
      const extension = filename.split(".").pop()?.toLowerCase();

      // เพิ่มคลาสที่แตกต่างกันตามนามสกุลไฟล์
      // ในอนาคตสามารถใช้ Prism.js เพื่อการ highlight ที่สมบูรณ์แบบ
      switch (extension) {
        case "js":
        case "jsx":
          // สำหรับไฟล์ JavaScript ให้แสดงเนื้อหาด้วยสีเฉพาะ
          return content
            .replace(/(\/\/.*)/g, '<span style="color: #6a9955;">$1</span>') // คอมเมนต์บรรทัดเดียว
            .replace(
              /(const|let|var|function|return|if|else|for|while)/g,
              '<span style="color: #569cd6;">$1</span>'
            ); // คำสำคัญ

        case "ts":
        case "tsx":
          // สำหรับไฟล์ TypeScript
          return content
            .replace(/(\/\/.*)/g, '<span style="color: #6a9955;">$1</span>') // คอมเมนต์บรรทัดเดียว
            .replace(
              /(const|let|var|function|return|if|else|interface|type|extends)/g,
              '<span style="color: #569cd6;">$1</span>'
            ); // คำสำคัญ

        case "md":
          // สำหรับไฟล์ Markdown
          return content
            .replace(
              /^(#{1,6} .*)/gm,
              '<span style="color: #569cd6;">$1</span>'
            ) // หัวข้อ
            .replace(
              /(\*.+?\*)/g,
              '<span style="color: #ce9178;"><i>$1</i></span>'
            ); // ตัวเอียง

        case "json":
          // สำหรับไฟล์ JSON
          return content.replace(
            /"([^"]+)":/g,
            '<span style="color: #9cdcfe;">"$1":</span>'
          ); // คีย์

        case "txt":
          // สำหรับไฟล์ข้อความทั่วไป
          return content;

        default:
          // สำหรับนามสกุลไฟล์อื่นๆ
          return content;
      }
    } catch (error) {
      console.error("Error highlighting syntax:", error);
      return content;
    }
  };

  // ส่วนของ UI ที่จะ render
  return (
    <div
      className={`w-full bg-gray-800 flex flex-col rounded-md overflow-hidden shadow-lg ${className}`}
      style={{ height }}>
      {/* ส่วนหัวของ VS Code (แถบด้านบน) */}
      <div className="bg-gray-700 px-4 py-2 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm">{editorTitle}</div>
      </div>

      <div className="flex h-full">
        {/* ส่วนแสดงไฟล์ Explorer ด้านซ้าย */}
        <div className="w-40 bg-gray-900 border-r border-gray-600 p-2">
          <div className="text-gray-300 text-sm font-semibold mb-2 flex items-center">
            <FolderOpen size={16} className="mr-2" />
            EXPLORER
          </div>

          {/* แสดงรายการไฟล์และโฟลเดอร์ */}
          <div className="space-y-1">
            {fileTree.map((item, index) => {
              // สำหรับโฟลเดอร์
              if (item.type === "folder") {
                return (
                  <div key={`folder-${index}`}>
                    <div
                      className="flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded text-gray-300"
                      style={{ paddingLeft: `${(item.level || 0) * 12 + 4}px` }}
                      onClick={() => toggleFolder(item.name)}>
                      {expandedFolders[item.name] ? (
                        <ChevronDown size={14} /> // ไอคอนลูกศรลงถ้าโฟลเดอร์เปิดอยู่
                      ) : (
                        <ChevronRight size={14} /> // ไอคอนลูกศรขวาถ้าโฟลเดอร์ปิดอยู่
                      )}
                      <FolderOpen size={14} className="mx-1" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </div>
                );
              }
              // สำหรับไฟล์
              else {
                // แสดงไฟล์เฉพาะเมื่อโฟลเดอร์แม่เปิดอยู่ หรือไม่มีโฟลเดอร์แม่
                const shouldShow = !item.parent || expandedFolders[item.parent];

                if (!shouldShow) return null;

                // ตรวจสอบว่าโฟลเดอร์แม่ของโฟลเดอร์แม่เปิดอยู่หรือไม่ (สำหรับโฟลเดอร์ซ้อน)
                const parentItem = fileTree.find(
                  (f) => f.name === item.parent && f.type === "folder"
                );
                if (
                  parentItem &&
                  parentItem.parent &&
                  !expandedFolders[parentItem.parent]
                ) {
                  return null;
                }

                return (
                  <div
                    key={`file-${index}`}
                    className={`flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded ${
                      currentFile === item.name
                        ? "bg-blue-800" // สีฟ้าเข้มเมื่อไฟล์ถูกเลือก
                        : "text-gray-300"
                    }`}
                    style={{ paddingLeft: `${(item.level || 0) * 12 + 20}px` }}
                    onClick={() => handleFileClick(item.name)}>
                    <span className="mr-2 text-xs">
                      {getFileIcon(item.name)}
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* ส่วนแสดงโค้ด Editor ด้านขวา */}
        <div className="flex-1 bg-gray-800 overflow-hidden flex flex-col">
          {/* แถบแสดงชื่อไฟล์ที่เปิดอยู่ (Tab Bar) */}
          <div className="bg-gray-700 border-b border-gray-600 flex">
            {currentFile && (
              <div className="bg-gray-800 px-4 py-2 border-r border-gray-600 flex items-center">
                <span className="mr-2 text-xs">{getFileIcon(currentFile)}</span>
                <span className="text-gray-300 text-sm">{currentFile}</span>
              </div>
            )}
          </div>

          {/* ส่วนแสดงเนื้อหาของไฟล์ */}
          <div className="p-4 font-mono text-sm text-gray-300 overflow-y-auto flex-1">
            {currentFile && fileContents[currentFile] ? (
              <pre
                className="whitespace-pre-wrap leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: getSyntaxHighlightedContent(
                    fileContents[currentFile],
                    currentFile
                  ),
                }}
              />
            ) : (
              <div className="text-gray-500 italic">
                {
                  currentFile
                    ? "No content available for this file" /* แสดงเมื่อไม่มีเนื้อหาของไฟล์ */
                    : "Select a file from the explorer" /* แสดงเมื่อไม่มีการเลือกไฟล์ */
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeMockup; // ส่งออก component เพื่อให้สามารถนำไปใช้ในที่อื่นได้
