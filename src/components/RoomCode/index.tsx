import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
  code: any;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button onClick={copyRoomCodeToClipboard} className='room-code'>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala MtQC2GGa2NVtfcsEJ45</span>
    </button>
  )
}