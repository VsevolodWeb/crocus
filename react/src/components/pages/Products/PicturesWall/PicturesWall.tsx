import React from 'react';
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

class PicturesWall extends React.Component<PropsType, StateType> {
	state = {
		previewVisible: false,
		previewImage: '',
		fileList: this.props.photos
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true,
		});
	};

	handleChange = ({ fileList}: UploadChangeParam) => this.setState({ fileList });

	render() {
		const { previewVisible, previewImage, fileList } = this.state;

		return (
			<div>
				<Upload
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
				>
					{this.props.editableProductId === this.props.productId
					? <div>
					    <PlusOutlined />
					    <div className="ant-upload-text">Загрузить</div>
					  </div>
					: null}
				</Upload>
				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</div>
		);
	}
}

export default PicturesWall;