import { DeepChat } from 'deep-chat-react';
import {Col} from "react-bootstrap";
import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../Utils/translations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

import senseiAvatar from "../assets/sensei.png";
import studentAvatar from "../assets/student.png";

function TestGrammar() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
      <DeepChat
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 DeepChat_div_class"
        style={{ width: "99em", height: "46em", padding: "5px", border: "10px" }}
        avatars={{
          ai: {src: senseiAvatar,styles: {avatar: {width: "30px",height: "30px",borderRadius: "50%"}}},
          user: {src: studentAvatar, styles: { avatar: {width: "30px",height: "30px",borderRadius: "50%"}}}
        }}
        connect={{
            url: "testes/chat",
            method: "POST",
        }}

        requestInterceptor={(details) => {
            // return {
            //     ...details,
            //     headers: details.headers,
            //     body: body
            // };
        }}

        responseInterceptor={async (rawResponse) => {
            //return { ...aiMessage, text: messageText };
        }}

        onMessage={(msg) => {
            if (!isLoadingHistory.current) {
                chatHistoryRef.current.push({
                    role: msg.message["role"],
                    message: msg.message["text"]
                });
            }
        }}

        textInput={{
            placeholder: { text: "Digite seu texto..." },
            styles: {
                text: {
                    width: "95%",
                },
                container: {
                    width: "95%"
                }
            }
        }}

        messageStyles={{
            default: {
                shared: { bubble: { maxWidth: "100%" } }
            }
        }}

        introMessage={{
            html: `
              <div style="padding: 1em">
                <div style="font-size: 16px; line-height: 1.6; opacity: 0.95;">
                  ${t.IntroduceGrammarTests}
                </div>
              </div>
            `
        }} />
    </Col>
  );
}

export default TestGrammar;
