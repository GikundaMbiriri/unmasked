import React,{useState} from 'react'
import './subscribe.css'
import { Divider,Form,Input, Button } from 'antd';
import 'antd/dist/antd.css';

function Subscribe() {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
      };
    return (
        <div>
           
<Divider  plain ><h2>Subscribe</h2></Divider>
<div className="yeess">
<div style={{textAlign:"center",paddingBottom:"10px"}}>Enter your email to get updates on new articles</div>
<Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
     
        onValuesChange={onFormLayoutChange}
        initialValues={{
            size: componentSize,
          }}
          size={componentSize}
      >
           <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
        Subscribe
        </Button>
      </Form.Item>
          </Form>
          </div>
        </div>
    )
}

export default Subscribe
