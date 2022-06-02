import { useEffect, useState } from "react";

function UseEffectReviewAvatar() {
    const [avatar, setAvatar] = useState()

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        console.log(file.preview)
    }

    useEffect(() => {
        avatar && console.log(avatar.preview)
        //cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="50%" />
            )}
        </div>)
};

export default UseEffectReviewAvatar;