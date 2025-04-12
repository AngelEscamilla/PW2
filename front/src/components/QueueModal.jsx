import React from 'react'
import SongItem from './SongItem'

const QueueModal = ({ onClose, queue }) => {
  return (
    <div className="queue-modal-backdrop" onClick={onClose}>
      <div className="queue-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Cola de Reproducción</h3>
        <div className="queue-list">
          {queue.map((song, index) => (
            <SongItem
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
            />
          ))}
        </div>
        <button className="close-queue-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default QueueModal
