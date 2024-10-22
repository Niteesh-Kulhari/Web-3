import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Attention!</DialogTitle>
          <DialogDescription className="text-base">
            Make sure your wallet is in Test/Dev mode before you airdrop SOL.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end space-x-2">
          <Button onClick={onClose}>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}