import { UiInput } from "@/shared/ui/ui-input";
import { SearchIcon } from "@/shared/ui/icons/search-icon.tsx";
import { UiTypography } from "@/shared/ui/ui-typography";

export const TestsSearchFilter = ({
  className,
  testsCount,
  value,
  onChange,
}: {
  className?: string;
  testsCount: number;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <UiInput
      value={value}
      onTextChange={onChange}
      className={className}
      placeholder={"What test are you looking for?"}
      prepend={<SearchIcon width={"1rem"} height={"1rem"} />}
      append={
        <UiTypography style={{ whiteSpace: "nowrap" }} color={"opacity"}>
          {`${testsCount} tests`}
        </UiTypography>
      }
    />
  );
};
