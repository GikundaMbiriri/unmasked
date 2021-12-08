import React, { useRef,useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useFileUpload } from 'use-file-upload'
import { AiOutlineClose,AiOutlineUpload } from 'react-icons/ai'
import Modal from 'react-modal';
import axios from "axios";
import './tiny.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Select, Input } from 'antd';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width:'80vw',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function App(props) {
  const [body,setBody]=useState("");
  const [name,setName]=useState("");
  const [category,setCategory]=useState("");
  const [title,setTitle]=useState("");
  const [image,setImage]=useState("");
  const [ff,setFf]=useState({});
  const [ready,setReady]=useState(true);

  const { Option } = Select;
  const [file, selectFile] = useFileUpload()
  const editorRef = useRef(null);
  function handleChange(value) {
    setCategory(value)

  }
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  const handleEditorChange=(content,editor)=>{
    setBody(content);
  }
 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
const handleSubmit=async ()=>{
  var k=props.history;
  setReady(false);

  const resp=await  axios.post(
    "https://us-central1-unmasked-f020e.cloudfunctions.net/api/image",
    ff
  );
  setImage(resp.data);
  const data={
    body:body,
    name:name,
    category:category,
    title:title,
    image:image
  }
const sen=await axios
.post(
  "https://us-central1-unmasked-f020e.cloudfunctions.net/api/postArticles",
  data
)
setReady(true)
console.log(sen)
k.push("/");
}
 const  handleImageChange =  (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
setFf(formData);
   console.log(formData)
    //this.props.uploadImage(formData);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <div className="be">
     <div onClick={openModal} className="ss">Submit</div>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        apiKey='606m1n0ype20z6lukpvseguh4kxpdsac0ph20mzlq0u8b88f'
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor ",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code  wordcount",
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          file_picker_types: "image",
          /* and here's our custom image picker*/
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */

            input.onchange = function () {
              var file = this.files[0];
              var reader = new FileReader();
              reader.onload = function () {
                /*
              Note: Now we need to register the blob in TinyMCEs image blob
              registry. In the next release this part hopefully won't be
              necessary, as we are looking to handle it internally.
            */
                var id = "blobid" + new Date().getTime();
                var blobCache =
                  window.tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(",")[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },
          automatic_uploads: true,
          file_picker_types: "image",
          font_formats:
            "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
          icons_url: "https://www.example.com/icons/material/icons.js",
          icons: "material",
          menu: {
            file: {
              title: "File",
              items: "newdocument restoredraft | preview | print ",
            },
            edit: {
              title: "Edit",
              items: "undo redo | cut copy paste | selectall | searchreplace",
            },
            view: {
              title: "View",
              items:
                "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen",
            },
            insert: {
              title: "Insert",
              items:
                "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat",
            },
            tools: {
              title: "Tools",
              items: "spellchecker spellcheckerlanguage | code wordcount",
            },
            table: {
              title: "Table",
              items: "inserttable | cell row column | tableprops deletetable",
            },
            help: { title: "Help", items: "help" },
          },
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handleEditorChange}
        
      />
     
          <div>
      
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
       <div className="md" >
         <div className="mh">
         Let's finish this!
         </div>
<div className="mi" onClick={closeModal}><AiOutlineClose/> </div>
       </div>
       
        <div>
    
      <div className="mcm"   onClick={() => {
        
        selectFile()
      }}>

<span className="ui">Upload cover image</span>
</div>
     
        <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={handleImageChange}
                    />
      <div className="mse">
        <h3>Select category</h3>
        <Select defaultValue="stress" className="sse" onChange={handleChange}>
      <Option value="depression">Depression</Option>
      <Option value="stress">Stress</Option>
      
    </Select>
    </div>
    <div className="mse">
      <h3>Writter's name</h3>
    <Input placeholder="Writter's name" className="sse" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
    <div className="mse">
      <h3>Article's Title</h3>
    <Input placeholder="Article's title" className="sse" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="ssm" onClick={handleSubmit}>{ready?<>submit</>:<>
  <i className="fa fa-spinner fa-spin"></i>Saving
</>}</div>
    </div>
  
      </Modal>
    </div>
    </div>
    </>
  );
}
