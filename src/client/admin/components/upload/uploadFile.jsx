import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload, } from 'antd';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const UploadFile = () => {
    return (
        <div>
            <Form label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Upload
                        </div>
                    </div>
                </Upload>
            </Form>
        </div>
    )
}

export default UploadFile