import React, {useState} from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {UploadChangeParam, UploadFile} from "antd/lib/upload/interface";

function getBase64(file: any) {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if(typeof reader.result === "string") {
				return resolve(reader.result);
			} else {
				reject("Ошибка загрузки файла");
			}
		};
		reader.onerror = error => reject(error);
	});
}

type PropsType = {
	photos: Array<UploadFile>
	productId: number
	editableProductId: number | null
}

type StateType = {
	previewVisible: boolean
	previewImage?: string
	fileList: Array<UploadFile>
}

const PicturesWall: React.FC<PropsType> = props => {
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState<string | undefined>('');
	const [fileList, setFileList] = useState(props.photos);

	const isEditMode = props.editableProductId === props.productId;

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
	};

	const handleChange = ({ fileList}: UploadChangeParam) => setFileList(fileList);

	return (
		<div>
			<Upload
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				showUploadList={{showRemoveIcon: isEditMode}}
			>
				{isEditMode
					? <div>
						<PlusOutlined/>
						<div className="ant-upload-text">Загрузить</div>
					</div>
					: null}
			</Upload>
			<Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</div>
	)
};

export default PicturesWall;