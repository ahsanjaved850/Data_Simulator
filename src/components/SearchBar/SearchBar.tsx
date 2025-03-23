import { Input, Stack } from "@mui/material";
import React from "react";

import stripLogo from "@/assets/image 5.svg";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ paddingBottom: 1 }}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search by Brand or Model name"
        type="text"
        disableUnderline={true}
      />
      <img src={stripLogo} alt="StripLogo" />
    </Stack>
  );
};
