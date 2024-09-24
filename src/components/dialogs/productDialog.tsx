import { colors, images } from "@/constants";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
} from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { FTextField } from "../commons/FTextField";
import FButton from "../FButton";

const TextFieldFormControl = styled(FormControl)({
  width: "100%",
  marginBlock: "10px",
});

const FileInputWrapper = styled.div`
  position: relative;
`;

const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  position: relative;
  border: 1px dashed #e0e0e0;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  text-align: center;
`;

const BrowseText = styled.span`
  font-weight: 500;
  font-size: 12px;
  padding: 8px 24px;
  border: 1px solid #e0e0e0;
`;

const Form = styled.form`
    overflow: hidden;
`;

interface Props {
  isOpen: boolean;
  onCLose: () => void;
}

const ProductDialog = (props: Props) => {
  const { isOpen, onCLose } = props;
  return (
    <Dialog open={isOpen} onClose={onCLose} fullWidth>
      <DialogTitle>
        <Image
          src={images.logo}
          alt=""
          style={{ width: "100px", height: "50px", objectFit: "contain" }}
        />
      </DialogTitle>

      <Form>
        <DialogContent style={{ overflowY: "hidden", padding: "0px 24px" }}>
          <TextFieldFormControl>
            <FTextField value="" onValueChange={() => void 0} label="Name" />
          </TextFieldFormControl>

          <TextFieldFormControl>
            <FTextField
              value=""
              onValueChange={() => void 0}
              label="Price"
              type="number"
            />
          </TextFieldFormControl>

          <TextFieldFormControl>
            <FileInputWrapper>
              <InputFile type="file" name="file" id="file" />
              <Label htmlFor="file">
                <BrowseText>Upload Image</BrowseText>
              </Label>
            </FileInputWrapper>
          </TextFieldFormControl>
        </DialogContent>

        <DialogActions style={{ padding: "24px", columnGap: "10px" }}>
          <FButton
            onClick={onCLose}
            text="Add"
            sx={{
              padding: "0px !important",
              borderRadius: "0 !important",
              margin: "unset !important",
            }}
          />
          <FButton
            onClick={onCLose}
            text="Cancel"
            sx={{
              padding: "0px !important",
              borderRadius: "0 !important",
              background: "transparent !important",
              color: `${colors.primaryColor} !important`,
              margin: "unset !important",
            }}
          />
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default ProductDialog;
