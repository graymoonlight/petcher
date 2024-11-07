"use client"

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/profile.module.scss';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/placeholder.png");
  const [username, setUsername] = useState("ausdam");
  const [fullName, setFullName] = useState("Довжик Александр");
  const [role, setRole] = useState("Дизайнер");
  const [about, setAbout] = useState("Меня зовут Саня, мне 17 лет. Основной инструмент для работы: Figma...");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setProfileImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDelete = () => {
    router.push('/profile/accept');
    setShowModal(false);
  };


  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <label htmlFor="profileImageInput" className={styles.profileImageLabel}>
          <Image src={profileImage} alt="Profile Image" width={120} height={120} className={styles.profileImage} />
        </label>
        {isEditing && (
          <input
            type="file"
            id="profileImageInput"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        )}
        <h4>{username}</h4>
        {isEditing ? (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.inputField}
          />
        ) : (
          <h1>{fullName}</h1>
        )}
        {isEditing ? (
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.inputField}
          />
        ) : (
          <p>{role}</p>
        )}
        
        <span className={styles.editLink} onClick={handleEditClick}>
          {isEditing ? "Готово" : "Изменить"}
        </span>
      </div>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h2>Petсher</h2>
          <p>
            Petcher — это платформа, которая позволяет находить pet-проекты и команду для своего проекта...
          </p>
        </div>

        <div className={styles.section}>
          <h2>О себе</h2>
          {isEditing ? (
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className={styles.textArea}
            />
          ) : (
            <p>{about}</p>
          )}
        </div>
      </div>

      <div className={styles.accepteds}>
        <div className={styles.projectLink}>
          <div className={styles.accepted}>
            <h3>Принято</h3>
            <p>Petcher</p>
          </div>
          <div className={styles.projectarrow}>
            <h5>Дизайнер</h5>
            <Image src="/arrow_right.svg" alt="arrow" width={14} height={13} className={styles.arrowRight} />
          </div>
        </div>
      </div>
      <div className={styles.accepteds}>
        <div className={styles.projectLink}>
          <div className={styles.accepted}>
            <h3>Filmora</h3>
          </div>
          <div className={styles.projectarrow}>
            <Image src="/arrow_right.svg" alt="arrow" width={14} height={13} className={styles.arrowRight} />
          </div>
        </div>
      </div>

      {isEditing && (
        <button className={styles.deleteButton} onClick={handleDeleteClick}>Удалить аккаунт</button>
      )}

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Вы точно хотите удалить аккаунт?</h2>
            <p>При удалении аккаунта, вы больше не сможете восстановить к нему доступ.</p>
            <div className={styles.modalButtons}>
              <button onClick={confirmDelete} className={styles.confirmButton}>Далее</button>
              <button onClick={closeModal} className={styles.cancelButton}>Отменить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
