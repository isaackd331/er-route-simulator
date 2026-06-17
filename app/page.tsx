"use client";

import Button from "@/components/common/Button";
import ToggleDarkBtn from "@/components/headers/ToggleDarkBtn";

import { useModalStore } from "@/zustand/useModalStore";

const Index = () => {
  const { openModal } = useModalStore();

  const handleOpenModal = () => {
    openModal({
      content: <div>테스트</div>,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button
            label="프라이머리 버튼 테스트"
            size="fit"
            variant="primary"
            onClick={() => {
              handleOpenModal();
            }}
          />
          <Button
            label="오렌지 버튼 테스트"
            size="fit"
            variant="orange"
            onClick={() => {
              console.log("오렌지 버튼 반응중");
            }}
          />
          <Button
            disabled
            label="비활성 버튼 테스트"
            size="fit"
            variant="orange"
            onClick={() => {
              console.log("반응이 되면 곤란");
            }}
          />
          <ToggleDarkBtn />
        </div>
      </div>
    </>
  );
};

export default Index;
