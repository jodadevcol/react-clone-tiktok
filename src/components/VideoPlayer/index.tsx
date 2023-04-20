import styles from './styles.module.css'

const URL_VIDEO = 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o0k1hAAfgIdOIIIwl0CGEbEqWuUFztuAocVyJ1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1546&bt=773&cs=0&ds=3&ft=_RwJrB0zq8ZmoVrpIc_vjgKT7AhLrus&mime_type=video_mp4&qs=0&rc=aDdmaDM1PGllZ2g5OWhpaEBpMzdsbGg6ZjVuajMzODczNEBeLV80LTZjX2MxLy8wYDQ2YSNrLWBmcjRvb25gLS1kMS1zcw%3D%3D&btag=80000&expire=1681929806&l=20230419124318ECFB16ECE62C13167559&ply_type=2&policy=2&signature=e1db9a0180ce73348e11e96ae155a02b&tk=tt_chain_token'

function VideoPlayer () {
  return (
    <div className={styles.boxVideo}>
      <video autoPlay muted controls={false} className={styles.video} src={URL_VIDEO} />
    </div>
  )
}

export default VideoPlayer
