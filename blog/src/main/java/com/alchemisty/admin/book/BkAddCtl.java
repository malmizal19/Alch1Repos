package com.alchemisty.admin.book;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BkAddCtl {
	@RequestMapping(value = "/admin/book/BkAddView", method = RequestMethod.GET)
	public String home(Model model) {
		
		return "/admin/book/BkAdd";
	}	
	
	@RequestMapping(value = "/admin/book/BkAdd", method = RequestMethod.GET)
	public String home2(
			@RequestParam(value = "pBkid", required = false, defaultValue = "") String BkId, 
			@RequestParam(value = "pBkTitle", required = false, defaultValue = "") String BkTitle, 
			@RequestParam(value = "pBkAuthNm", required = false, defaultValue = "") String BkAuthNm, 
			@RequestParam(value = "pBkContent", required = false, defaultValue = "") String BkContent, 
            Locale locale, Model model) {
		
		
		return "/admin/book/BkLst";
	}
}
