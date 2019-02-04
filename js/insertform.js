function CreateForm() {
    var Appform = FormApp.create("Application Form for Register");
  //var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
    var NameTitle = ["Mr.","Ms.","Mrs."];
    
    var itemTN = Appform.addListItem();
    itemTN.setTitle('Title Name')
    itemTN.setChoices([
        
          itemTN.createChoice(NameTitle[0]),
          itemTN.createChoice(NameTitle[1]),
          itemTN.createChoice(NameTitle[2])
  
      ]);
    itemTN.setRequired(true)
    
    var itemFN = Appform.addTextItem();
    itemFN.setTitle('First Name');
    itemFN.setRequired(true)
    
    var itemLN = Appform.addTextItem();
    itemLN.setTitle('Last Name');
    itemLN.setRequired(true)
    
    var itemDOB = Appform.addDateItem();
    itemDOB.setTitle('Date of birth')
  //  itemDOB.setRequired(true)
    
    var itemTel = Appform.addTextItem();
    itemTel.setTitle('Telephone Number');
    itemTel.setRequired(true)
      
    var itemFB = Appform.addTextItem();
    itemFB.setTitle('Facebook');
  //  itemTel.setRequired(true)
      
    var itemLine = Appform.addTextItem();
    itemLine.setTitle('Line');
  //  itemTel.setRequired(true)
      
    var itemInstagram = Appform.addTextItem();
    itemInstagram.setTitle('Instagram');
  //  itemTel.setRequired(true)
      
    var itemAD = Appform.addTextItem();
    itemAD.setTitle('Address in ID Card');
  //  itemTel.setRequired(true)
      
    var itemCA = Appform.addTextItem();
    itemCA.setTitle('Current Address');
  //  itemTel.setRequired(true)
      
    var itemEI = Appform.addTextItem();
    itemEI.setTitle('Educational institution ');
  //  itemEI.setRequired(true)
    
    var itemGPAx = Appform.addTextItem();
    itemGPAx.setTitle('GPAX');
  //  itemGPAx.setRequired(true)
      
    var itemSkill = Appform.addTextItem();
    itemSkill.setTitle('Skill programming');
    itemSkill.setRequired(true)
      
    var itemTFD = Appform.addTextItem();
    itemTFD.setTitle('Tool for development');
    itemTFD.setRequired(true)
      
    var itemSP = Appform.addTextItem();
    itemSP.setTitle('Software Package');
    itemSP.setRequired(true)  
    
    Logger.log('Published URL: ' + Appform.getPublishedUrl());
    Logger.log('Editor URL: ' + Appform.getEditUrl());
  }
  