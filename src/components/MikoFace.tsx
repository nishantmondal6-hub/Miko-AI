import "./MikoFace.css";

type MikoFaceProps = {
    isTalking?: boolean;
    isListening?: boolean;

};

export default function MikoFace({
    isTalking = false,
    isListening = false,

}: MikoFaceProps) {
    return (
        <div
        className={`miko-face ${isTalking ? "talking" : ""} ${
            isListening ? "listening" : ""
        }`}
        >
            <div className="miko-head">
                <div className="miko-screen">
                    <div className="miko-eyes">
                        <div className="miko-eye">
                            <div className="miko-pupil" />

                        </div>
                        <div className="miko-eye">
                            <div className="miko-pupil"/>
                        </div>

                    </div>

                    <div className="miko-mouth" />
                </div>
                <div className="miko-ear left" />
                <div className="miko-ear right" />
            </div>

            <div className="miko-neck" />
            <div className="miko-core">M</div>
        </div>
        

)}