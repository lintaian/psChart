package com.lps.pschart.service.interfaces;

import com.lepeisheng.flipped.rpc.ParentInfo;

public interface UserServiceIF {
	public ParentInfo login(final String name, final String pwd) throws Exception;
}
