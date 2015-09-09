var modal = <Modal type="loadmask" title="" />;

var modalInstance = (
  <ModalTrigger
    modal={modal}>
    <Button amStyle="primary">Loading Mask 遮罩层</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
