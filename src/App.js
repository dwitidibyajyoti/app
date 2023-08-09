import logo from "./logo.svg";
import "./App.css";
import { DocumentEditor } from "@onlyoffice/document-editor-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import IframeEmbeddingEditor from "./IframeEmbeddingEditor";
// import Default from "./default";
// import convert from "./convert";
import Convert from "./convert";

function App() {
  const [editorData, setEditorData] = useState("<p>Loading...</p>");
  var onDocumentReady = function (event) {
    console.log("Document is loaded");
  };

  useEffect(() => {
    // Your code to fetch and convert the DOCX content to HTML here
    const docxToHtml = ``;
    setEditorData(docxToHtml);
  }, []);

  return (
    <>
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
       

        {/* <IframeEmbeddingEditor /> */}
        {/* <Default/> */}\
        <Convert/>
       
      </div>
    </>
  );
}

export default App;
