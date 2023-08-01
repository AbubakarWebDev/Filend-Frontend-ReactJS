import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Room = () => {
  const user = useSelector((state) => state.user.user);

  const myMeeting = (element) => {
    const appID = 1941361114;
    const serverSecret = "053a5e58828bd7cd2b35495406682964";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      user ? user.username : "Enter Your Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${import.meta.env.VITE_BASE_URL}/video-meeting/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showRemoveUserButton: true,
      showRoomTimer: true,
      // turnOnMicrophoneWhenJoining: false,
      // turnOnCameraWhenJoining: false,
      // showLeavingView: false,
      showScreenSharingButton: false,
      showAudioVideoSettingsButton: false,
    });
  };

  const { roomId } = useParams();

  return <div className="w-screen h-screen bg-gray-200" ref={myMeeting}></div>;
};
export default Room;
