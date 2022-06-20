import React from 'react';
import Card from '../components/Card'
import { getCatalogItems } from '../data';

class Contacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formValid: true,
            privacy: false,
            privacyValid: true,
            email: '',
            emailValid: true,
            reason: 0,
            reasonValid: false,
            typeValid: true,
            types: [
                {
                    id: 1,
                    name: "Вопрос по работе сайта"
                },
                {
                    id: 1,
                    name: "Вопрос по товарам"
                },
            ],
            selectedType: 0,
            files: [],
            filesValid: true, 
            radioValues: [
                'м', 'ж'
            ],
            radio: '',
            radioValid: true,
        };
    }


    onSendClick(e) {
       if (this.validate()){
           this.send();
       }
    }

    validate(){
        const validates = [
            this.validateEmail,
            this.validateFiles,
            this.validateType,
            this.validatePrivacy,
            this.validateRadio
        ];
        
        let bRes = true;
        for(var i=0; i<validates.length; i++){
            if (!(validates[i].bind(this).call())){
                bRes = false;
            }
        }
        return bRes;
    }

    send(){
        alert("Отправлено!");
    }


    onFileChange(e) {
        this.setState({
            files: e.target.files,
        }, ()=> this.validateFiles());
    }

    validateFiles(e) {
        const filesValid = this.state.files.length > 0;
        this.setState({
            filesValid: filesValid
        });
        return filesValid;
    }

    onTypeChange(e){
        this.setState({
            selectedType: e.target.value
        }, () => this.validateType());
    }

    validateType(){
        const typeValid = this.state.selectedType > 0;
        this.setState({typeValid: typeValid});
        return typeValid;
    }

    onEmailChange(e){
        this.setState({
            email: e.target.value
        }, () => this.validateEmail());
    }

    validateEmail(){
        const emailValid = !!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState({emailValid: emailValid});
        return emailValid;
    }

    onPrivacyChange(e){
        this.setState({
            privacy: !this.state.privacy
        }, () => this.validatePrivacy());
    }


    validatePrivacy(){
        const privacyValid = this.state.privacy;
        this.setState({privacyValid: privacyValid});
        return privacyValid;
    }

    onRadioChange(e){
        console.log(e.target.value)
        this.setState({
            radio: e.target.value
        }, () => this.validateRadio());
    }


    validateRadio(){
        const radioValid = this.state.radio;
        this.setState({radioValid: radioValid});
        return radioValid;
    }

    render() {
        return (
            <div>
                <h1>Форма обратной связи</h1>
                <div>
                    Ваш пол: 
                    {!this.state.radioValid && (
                        <span style={{color: 'red'}}> не выбрано!</span>
                    )}
                    <div>
                    {this.state.radioValues.map((v, i) => {
                        return (
                            <span>
                                <input key={i.toString()} type="radio" value={v} checked={this.state.radio === v} onChange={(e)=>this.onRadioChange(e)}/>{v}<br/></span>
                        );
                    })}
                    </div>
               </div> 
                <div>
                    Вид обращения:
                </div>
                <div>
                    Email:
                </div>
                <input style={!this.state.emailValid ? {backgroundColor: 'red'} : {}} value={this.state.email} onChange={(e) => this.onEmailChange(e)}/>
                <div>
                    Вид обращения:
                </div>
                <select style={!this.state.typeValid ? {backgroundColor: 'red'} : {}} value={this.state.selectedType} onChange={(e) => this.onTypeChange(e)} >
                    <option key="0" value={0}>&nbsp;</option>
                    {this.state.types.map((t, index) => {
                        return (
                            <option key={index.toString()} value={t.id}>{t.name}</option>
                        )
                    })}
                </select>
                <div>
                    Прикрепить файл
                    {!this.state.filesValid && (
                        <span style={{color: 'red'}}> не выбран!</span>
                    )}
                </div>
                <input name="files[]" type="file" onChange={e=>this.onFileChange(e)}/>

                <div>
                    Даю своё согласие на обработку персональных данных
                    {!this.state.privacyValid && (
                        <span style={{color: 'red'}}> не заполнено!</span>
                    )}
                </div>
                <input type="checkbox" checked={this.state.privacy} onChange={e=>this.onPrivacyChange(e)}/>

                <button onClick={()=>this.onSendClick()}>Отправить</button>
            </div>
        )
    }
  }

export default Contacts;