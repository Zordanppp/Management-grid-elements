export interface DisclosureData {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
}
