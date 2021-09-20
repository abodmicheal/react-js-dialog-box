import React from 'react'
import styles from './styles.module.css'

export const ReactDialogBox = ({
  modalWidth,
  headerBackgroundColor,
  headerTextColor,
  headerHeight,
  closeButtonColor,
  bodyBackgroundColor,
  bodyTextColor,
  bodyHeight,
  headerText,
  children,
  closeBox
}) => {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div
        className={styles.modal}
        style={{
          width: modalWidth
        }}
      >
        <header
          className={styles.modal__header}
          style={{
            backgroundColor: headerBackgroundColor,
            color: headerTextColor,
            height: headerHeight
          }}
        >
          <h4>{headerText}</h4>
          <button
            onClick={closeBox}
            className={styles.close_button}
            style={{
              color: closeButtonColor
            }}
          >
            &times;
          </button>
        </header>
        <main
          className={styles.modal__main}
          style={{
            backgroundColor: bodyBackgroundColor,
            color: bodyTextColor,
            height: bodyHeight
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
